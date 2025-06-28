const MeetingHistory = require('../../model/schema/meeting');
const mongoose = require('mongoose');

const add = async (req, res) => {
  try {
    const data = req.body;

    // Extra: Validate required fields if needed
    if (!data.agenda || !data.dateTime) {
      return res.status(400).json({ error: "Agenda and DateTime are required" });
    }

    const meeting = await MeetingHistory.create({
      ...data,
      createBy: req.user.userId, // 
    });

    res.status(200).json(meeting);
  } catch (err) {
    console.error("Add Meeting Error:", err);
    res.status(500).json({ error: err.message });
  }
};

const index = async (req, res) => {
  try {
    const filter = { deleted: false };

    // If not superAdmin, filter by creator
    if (req.user.role !== 'superAdmin') {
      filter.createBy = req.user.userId;
    }

    const meetings = await MeetingHistory.find(filter)
      .populate('attendes')
      .populate('attendesLead')
      .populate('createBy')
      .sort({ timestamp: -1 });

    res.status(200).json(meetings);
  } catch (err) {
    console.error("Fetch Meetings Error:", err);
    res.status(500).json({ error: err.message });
  }
};

const view = async (req, res) => {
  try {
    const id = req.params.id;

    const meeting = await MeetingHistory.findById(id)
      .populate('attendes')
      .populate('attendesLead')
      .populate('createBy');

    if (!meeting || meeting.deleted) {
      return res.status(404).json({ error: "Meeting not found" });
    }

    res.status(200).json(meeting);
  } catch (err) {
    console.error("View Meeting Error:", err);
    res.status(500).json({ error: err.message });
  }
};

const deleteData = async (req, res) => {
  try {
    const id = req.params.id;

    const result = await MeetingHistory.findByIdAndUpdate(id, { deleted: true });

    if (!result) {
      return res.status(404).json({ error: "Meeting not found" });
    }

    res.status(200).json({ message: "Meeting deleted" });
  } catch (err) {
    console.error("Delete Meeting Error:", err);
    res.status(500).json({ error: err.message });
  }
};

const deleteMany = async (req, res) => {
  try {
    const ids = req.body.ids;

    if (!Array.isArray(ids) || ids.length === 0) {
      return res.status(400).json({ error: "Invalid IDs array" });
    }

    const result = await MeetingHistory.updateMany(
      { _id: { $in: ids } },
      { $set: { deleted: true } }
    );

    res.status(200).json({ message: "Meetings deleted", result });
  } catch (err) {
    console.error("Delete Many Meetings Error:", err);
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  add,
  index,
  view,
  deleteData,
  deleteMany
};

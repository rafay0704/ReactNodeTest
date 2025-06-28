import { useEffect, useState } from "react";
import { Button, useToast, Spinner } from "@chakra-ui/react";
import { ethers } from "ethers";
import { WalletIcon } from "components/icons/Icons";

const WalletConnect = ({ onConnect }) => {
  const [walletAddress, setWalletAddress] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const notifyParent = (address) => {
    setWalletAddress(address);
    setIsConnected(!!address);
    if (onConnect) onConnect(address);
  };

  const connectWallet = async () => {
    setIsLoading(true);
    try {
      if (!window.ethereum) {
        toast({
          title: "MetaMask not detected",
          description: "Please install MetaMask extension to connect your wallet.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
        alert("MetaMask not detected. Please install MetaMask to continue.");
        return;
      }

      const provider = new ethers.BrowserProvider(window.ethereum);
      const accounts = await provider.send("eth_requestAccounts", []);
      if (accounts.length > 0) {
        notifyParent(accounts[0]);
        toast({
          title: "Wallet connected",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.error("Wallet connection error:", error);
      toast({
        title: "Wallet connection failed",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const disconnectWallet = () => {
    notifyParent(null);
    toast({
      title: "Wallet disconnected",
      status: "info",
      duration: 2000,
      isClosable: true,
    });
  };

  // Detect already connected wallet on first load
  useEffect(() => {
    if (window.ethereum && window.ethereum.selectedAddress) {
      notifyParent(window.ethereum.selectedAddress);
    }

    // Listen for account changes or manual disconnection
    const handleAccountsChanged = (accounts) => {
      if (accounts.length > 0) {
        notifyParent(accounts[0]);
      } else {
        notifyParent(null);
      }
    };

    window.ethereum?.on("accountsChanged", handleAccountsChanged);

    return () => {
      window.ethereum?.removeListener("accountsChanged", handleAccountsChanged);
    };
  }, []);

  return (
    <Button
      fontSize="sm"
      variant="brand"
      fontWeight="500"
      w="100%"
      h="50"
      mb="24px"
      onClick={isConnected ? disconnectWallet : connectWallet}
      isDisabled={isLoading}
       leftIcon={<WalletIcon w={5} h={5} />}
    >
      {isLoading ? (
        <Spinner />
      ) : isConnected ? (
        `Disconnect (${walletAddress?.slice(0, 6)}...${walletAddress?.slice(-4)})`
      ) : (
        "Connect Wallet"
      )}
    </Button>
  );
};

export default WalletConnect;

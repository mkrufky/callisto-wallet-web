"use strict";
var nodes = function() {};
nodes.customNode = require("./nodeHelpers/customNode");
nodes.infuraNode = require("./nodeHelpers/infura");
nodes.metamaskNode = require("./nodeHelpers/metamask");
nodes.nodeTypes = {
	CLO: "CLO",
	CLOT: "CLOT",
	Custom: "CUSTOM ETH"
};
nodes.ensNodeTypes = [nodes.nodeTypes.ETH, nodes.nodeTypes.Ropsten];
nodes.ensSubNodeTypes = [nodes.nodeTypes.ETH];
nodes.domainsaleNodeTypes = [nodes.nodeTypes.ETH, nodes.nodeTypes.Ropsten];
nodes.customNodeObj = {
	name: "CUS",
	blockExplorerTX: "",
	blockExplorerAddr: "",
	type: nodes.nodeTypes.Custom,
	eip155: false,
	chainId: "",
	tokenList: [],
	abiList: [],
	service: "Custom",
	lib: null
};
nodes.nodeList = {
	clo: {
		name: "CLO",
		blockExplorerTX: "https://explorer2.callisto.network/tx/[[txHash]]",
		blockExplorerAddr: "https://explorer2.callisto.network/addr/[[address]]",
		type: nodes.nodeTypes.CLO,
		eip155: true,
		chainId: 820,
		tokenList: require("./tokens/cloTokens.json"),
		abiList: require("./abiDefinitions/cloAbi.json"),
		service: "0xinfra.com",
		lib: new nodes.customNode("https://clo-geth.0xinfra.com/", "")
	},
	clo_testnet3: {
		name: "CLO Testnet 3.0",
		blockExplorerTX: "https://explorer-testnet.callisto.network/tx/[[txHash]]",
		blockExplorerAddr: "https://explorer-testnet.callisto.network/addr/[[address]]",
		type: nodes.nodeTypes.CLOT,
		eip155: true,
		chainId: 20729,
		tokenList: require("./tokens/cloTokens.json"),
		abiList: require("./abiDefinitions/cloAbi.json"),
		service: "clo-testnet3.0xinfra.com",
		lib: new nodes.customNode("https://clo-testnet3.0xinfra.com/", "")
	}
};

nodes.ethPrice = require("./nodeHelpers/ethPrice");
module.exports = nodes;

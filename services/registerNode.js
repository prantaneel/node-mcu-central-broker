/*
Every time a new node is created and is to be registered as a part of a network, we call the registerNode() function
*/
const hashAlgo = require("hash-wasm")

function assertNonNull(param){
    try{
        if(param == null) throw "Invalid state value."
    }
    catch(err){
        console.log(err)
    }
}

function createGlobalId(ip, port, macId){
    var message_val = String(ip) + String(port) + String(macId)
    var hash_val = hashAlgo.blake3(message_val, 256)

    return hash_val
}

function registerNode(node){
    //check whether the node has valid(non-null) state values
    assertNonNull(node.ip)
    assertNonNull(node.port)
    assertNonNull(node.macId)
    //create an nodeId and a topicId
    var nodeId = createGlobalId(this.ip, this.port, this.macId)
    //save the node values to the database

    return nodeId
}

export default registerNode
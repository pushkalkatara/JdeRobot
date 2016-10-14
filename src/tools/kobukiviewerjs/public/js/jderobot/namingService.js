// **********************************************************************
//
// Copyright (c) 2003-2016 ZeroC, Inc. All rights reserved.
//
// This copy of Ice is licensed to you under the terms described in the
// ICE_LICENSE file included in this distribution.
//
// **********************************************************************
//
// Ice version 3.6.3
//
// <auto-generated>
//
// Generated from file `namingService.ice'
//
// Warning: do not edit this file.
//
// </auto-generated>
//

(function(module, require, exports)
{
    var Ice = require("ice").Ice;
    var __M = Ice.__M;
    var jderobot = require("jderobot/common").jderobot;
    var Slice = Ice.Slice;

    jderobot.NameAlreadyExistException = Slice.defineUserException(
        function(what, _cause)
        {
            jderobot.JderobotException.call(this, what, _cause);
        },
        jderobot.JderobotException,
        "jderobot::NameAlreadyExistException",
        undefined, undefined,
        false,
        false);

    jderobot.NameNotExistException = Slice.defineUserException(
        function(what, _cause)
        {
            jderobot.JderobotException.call(this, what, _cause);
        },
        jderobot.JderobotException,
        "jderobot::NameNotExistException",
        undefined, undefined,
        false,
        false);

    jderobot.InterfaceNotExistException = Slice.defineUserException(
        function(what, _cause)
        {
            jderobot.JderobotException.call(this, what, _cause);
        },
        jderobot.JderobotException,
        "jderobot::InterfaceNotExistException",
        undefined, undefined,
        false,
        false);

    jderobot.NamingNode = Slice.defineObject(
        function(name, interfaceName, protocol, ip, port)
        {
            Ice.Object.call(this);
            this.name = name !== undefined ? name : "";
            this.interfaceName = interfaceName !== undefined ? interfaceName : "";
            this.protocol = protocol !== undefined ? protocol : "";
            this.ip = ip !== undefined ? ip : "";
            this.port = port !== undefined ? port : 0;
        },
        Ice.Object, undefined, 1,
        [
            "::Ice::Object",
            "::jderobot::NamingNode"
        ],
        -1,
        function(__os)
        {
            __os.writeString(this.name);
            __os.writeString(this.interfaceName);
            __os.writeString(this.protocol);
            __os.writeString(this.ip);
            __os.writeInt(this.port);
        },
        function(__is)
        {
            this.name = __is.readString();
            this.interfaceName = __is.readString();
            this.protocol = __is.readString();
            this.ip = __is.readString();
            this.port = __is.readInt();
        },
        false);

    jderobot.NamingNodePrx = Slice.defineProxy(Ice.ObjectPrx, jderobot.NamingNode.ice_staticId, undefined);

    Slice.defineOperations(jderobot.NamingNode, jderobot.NamingNodePrx);
    Slice.defineSequence(jderobot, "nodeListHelper", "Ice.ObjectHelper", false, "jderobot.NamingNode");

    jderobot.NodeContainer = Slice.defineObject(
        function(nodes)
        {
            Ice.Object.call(this);
            this.nodes = nodes !== undefined ? nodes : null;
        },
        Ice.Object, undefined, 1,
        [
            "::Ice::Object",
            "::jderobot::NodeContainer"
        ],
        -1,
        function(__os)
        {
            jderobot.nodeListHelper.write(__os, this.nodes);
        },
        function(__is)
        {
            this.nodes = jderobot.nodeListHelper.read(__is);
        },
        false);

    jderobot.NodeContainerPrx = Slice.defineProxy(Ice.ObjectPrx, jderobot.NodeContainer.ice_staticId, undefined);

    Slice.defineOperations(jderobot.NodeContainer, jderobot.NodeContainerPrx);

    jderobot.NamingService = Slice.defineObject(
        undefined,
        Ice.Object, undefined, 1,
        [
            "::Ice::Object",
            "::jderobot::NamingService"
        ],
        -1, undefined, undefined, false);

    jderobot.NamingServicePrx = Slice.defineProxy(Ice.ObjectPrx, jderobot.NamingService.ice_staticId, undefined);

    Slice.defineOperations(jderobot.NamingService, jderobot.NamingServicePrx,
    {
        "bind": [, , , , , , [["jderobot.NamingNode", true]], , 
        [
            jderobot.NameAlreadyExistException
        ], true, ],
        "unbind": [, , , , , , [["jderobot.NamingNode", true]], , 
        [
            jderobot.NameAlreadyExistException,
            jderobot.NameNotExistException
        ], true, ],
        "resolveByName": [, 2, 2, , , ["jderobot.NodeContainer", true], [[7]], , 
        [
            jderobot.NameNotExistException
        ], , true],
        "resolveByInterface": [, 2, 2, , , ["jderobot.NodeContainer", true], [[7]], , 
        [
            jderobot.InterfaceNotExistException
        ], , true]
    });
    exports.jderobot = jderobot;
}
(typeof(global) !== "undefined" && typeof(global.process) !== "undefined" ? module : undefined,
 typeof(global) !== "undefined" && typeof(global.process) !== "undefined" ? require : this.Ice.__require,
 typeof(global) !== "undefined" && typeof(global.process) !== "undefined" ? exports : this));
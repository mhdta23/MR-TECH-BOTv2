const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');

Asena.addCommand({ pattern: 'song', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

  var r_text = new Array();
  r_text[0] = "\nš\n";
  r_text[1] = "š";
  r_text[2] = "š§©";
  r_text[3] = "š„";
  r_text[4] = "š²";
  r_text[5] = "š„“";
  
  var i = Math.floor(6 * Math.random())

  await message.sendMessage(r_text[i]);

}));

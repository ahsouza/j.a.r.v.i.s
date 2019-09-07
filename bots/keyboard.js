const env = require('../.env')
const Telegraf = require('telegraf')
const Markup = require('telegraf/markup')
const bot = new Telegraf(env.token)

const keyboardMyWorks = Markup.keyboard([
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
]).resize().extra()

const keyboardMyTasks = Markup.keyboard([
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
]).resize().extra()

const keyboardMyStudies = Markup.keyboard([
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
]).resize().extra()

const keyboardMyShopping = Markup.keyboard([
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
]).resize().extra()

const keyboardMyDreams = Markup.keyboard([
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
]).resize().extra()

const keyboardMyBusiness = Markup.keyboard([
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
]).resize().extra()

const keyboardGiftsForMyLove = Markup.keyboard([
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
]).resize().extra()

const keyboardGiftsForMySon = Markup.keyboard([
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
]).resize().extra()

const keyboardObligationsToMySon = Markup.keyboard([
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
]).resize().extra()

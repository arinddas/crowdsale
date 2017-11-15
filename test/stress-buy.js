// @flow
'use strict'

const BigNumber = web3.BigNumber;
const expect = require('chai').expect;
const should = require('chai')
    .use(require('chai-as-promised'))
    .use(require('chai-bignumber')(web3.BigNumber))
    .should();

import ether from './helpers/ether';
import {advanceBlock} from './helpers/advanceToBlock';
import {increaseTimeTo, duration} from './helpers/increaseTime';
import latestTime from './helpers/latestTime';
import EVMThrow from './helpers/EVMThrow';

const CATCrowdsale = artifacts.require("CATCrowdsale");

contract('stress-buy', function () {

    it.only('buy', async function() {
        const crowdsale = await CATCrowdsale.at("0x3cfbba91afd3353f434c24b57f8a6a9c49b3f998");
        for (var i = 0; i < 10; i++) {
            console.log(crowdsale.sendTransaction({value: 50}));
        }
    })

})
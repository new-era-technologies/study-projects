'use strict';


var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
var fetch = require('node-fetch');


describe('Pokemon data', function() {

    it('should get id of pokemon', async function() {
        await fetch('https://pokeapi.co/api/v2/pokemon/2/')
            .then(function(response) {
                return response.json();
            })
            .then(function(response) {
                assert.equal(response.id, 2);
            })
    });
    it('should get name of pokemon', async function() {
        await fetch('https://pokeapi.co/api/v2/pokemon/5/')
            .then(function(response) {
                return response.json();
            })
            .then(function(response) {
                assert.equal(response.name, 'charmeleon');
            })
    });
    it('should get base experience of pokemon', async function() {
        await fetch('https://pokeapi.co/api/v2/pokemon/3/')
            .then(function(response) {
                return response.json();
            })
            .then(function(response) {
                assert.equal(response.base_experience, 236);
            })
    });
    it('should get height of pokemon', async function() {
        await fetch('https://pokeapi.co/api/v2/pokemon/4/')
            .then(function(response) {
                return response.json();
            })
            .then(function(response) {
                assert.equal(response.height, 6);
            })
    });
    it('should get weight of pokemon', async function() {
        await fetch('https://pokeapi.co/api/v2/pokemon/6/')
            .then(function(response) {
                return response.json();
            })
            .then(function(response) {
                assert.equal(response.weight, 905);
            })
    });
    it('should get ability of pokemon', async function() {
        await fetch('https://pokeapi.co/api/v2/pokemon/7/')
            .then(function(response) {
                return response.json();
            })
            .then(function(response) {
                expect(response.abilities[1].ability.name).to.equal('torrent');
            })
    });
    it('should get move of pokemon', async function() {
        await fetch('https://pokeapi.co/api/v2/pokemon/10/')
            .then(function(response) {
                return response.json();
            })
            .then(function(response) {
                expect(response.moves[0].move.name).to.equal('tackle');
            })
    });

});
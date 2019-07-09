const {expect, assert} = require('chai');

const request = require('supertest');

const app = require('../server');

describe('test GET', ()=>{
    it('OK, GET works', (done)=> {
        request(app).get('/')
            .expect(200,done)
            
    })
})

describe('test POST', ()=>{
    it('OK, POST works', (done)=> {
        request(app).post('/')
            .send({
                city: 'saigon'
            })
            .set('Accept', 'application/json')
            .expect(200,done)
            
    })
})
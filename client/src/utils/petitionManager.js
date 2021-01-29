import Vue from 'vue'
import axios from 'axios'
import ServiceResponse from '../model/serviceResponse'

export default {
    uri: "http://localhost:8080/",
    formatParams: function(params)
    {
        return JSON.stringify(params);
    },
    head: 
    { 
        headers:
        {
            'Content-Type': 'application/json'
        } 
    },
    handlePetitionResponse: function(res, successCallback, errorCallback,successMessage){
        var response = new ServiceResponse(res.data);
        if (response.isSuccess) {
            Vue.notify({ title: 'Success!', text: successMessage || '', type: 'success' });
            successCallback(response.content) || function () { }
        }
        else {
            Vue.notify({ title: 'Oops!', text: response.errorMessage, type: 'error' });
            errorCallback(response) || function () { }
        }
    },
    handlePetitionError: function(error, errorCallback){
        Vue.notify({ title: 'Error!', text: error.message, type: 'error' });
        errorCallback(error) || function () { }
    },
    post: function (url, params, successMessage, successCallback, errorCallback) {
        axios.post(this.uri + url, this.formatParams(params), this.head,).then(
            res=> this.handlePetitionResponse(res, successCallback,errorCallback,successMessage),
            error => this.handlePetitionError(error, errorCallback));
    },
    patch: function (url, params, successMessage, successCallback, errorCallback) {
        axios.patch(this.uri + url, this.formatParams(params), this.head,).then(
            res=> this.handlePetitionResponse(res, successCallback,errorCallback,successMessage), 
            error => this.handlePetitionError(error, errorCallback));
        
    },
    get: function (url, params, successMessage, successCallback, errorCallback) {
        axios.get(this.uri + url, this.formatParams(params), this.head,).then(
            res=> this.handlePetitionResponse(res, successCallback,errorCallback,successMessage), 
            error => this.handlePetitionError(error, errorCallback));
    }
}

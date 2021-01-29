export default class ServiceResponse {
    constructor({ status, content, error_message }) {
        this.isSuccess = status == "SUCCESS";
        this.content = content;
        this.error_message = error_message;
    }
}
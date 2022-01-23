export class Message {
    sender: string;
    time: string;
    message: string;
    receiver: string;

    constructor(
        sender: string,
        time: string,
        message: string,
        receiver: string
    ) {
        this.sender = sender;
        this.receiver = receiver;
        this.time = time;
        this.message = message;
    }
}

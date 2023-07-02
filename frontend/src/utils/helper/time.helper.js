export const getOffsetTime = (time) => {
    const newTime =  new Date(Date.now());
    const year    = newTime.getFullYear();
    const month   = newTime.getMonth()+1;
    const day     = newTime.getDate();
    const hour    = newTime.getHours();
    const minute  = newTime.getMinutes();
    const seconds = newTime.getSeconds();
    const milliseconds = newTime.getMilliseconds();

    const messageTime =  new Date(time);
    const yearMessage    = messageTime.getFullYear();
    const monthMessage   = messageTime.getMonth()+1;
    const dayMessage     = messageTime.getDate();
    const hourMessage    = messageTime.getHours();
    const minuteMessage  = messageTime.getMinutes();
    const secondsMessage = messageTime.getSeconds();
    const millisecondsMessage = messageTime.getSeconds();

    if(year - yearMessage > 0) {
        return (year - yearMessage).toString() + ' year ago'
    }
    if(month - monthMessage > 0) {
        return (month - monthMessage).toString() + ' month ago'
    }
    if(day - dayMessage > 0) {
        return (day - dayMessage).toString() + ' day ago'
    }
    if(hour - hourMessage > 0) {
        return (hour - hourMessage).toString() + ' hour ago'
    }
    if(minute - minuteMessage > 0) {
        return (minute - minuteMessage).toString() + ' minute ago'
    }
    if(seconds - secondsMessage > 0) {
        return (seconds - secondsMessage).toString() + ' seconds ago'
    }

    if(milliseconds - millisecondsMessage > 0) {
        return 'Just Now'
    }

    return year + '. ' + month + '. ' + day ;
}

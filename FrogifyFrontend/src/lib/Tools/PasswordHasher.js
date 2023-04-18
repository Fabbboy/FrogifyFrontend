import sha256 from 'js-sha256';

function hashPwd(password){
    const rounds = 10;
    let current = password;
    for(let i = 0; i < rounds; i++){
        current = sha256(current);
    }
    return current;
}

export function truncatePassword(password){
    return password.substring(0, 32);//this code truncates the password to 32 characters, so that the password is not longer than the hash (which is 64 characters
}

function monitoredHashPwd(password){
    const rounds = 10;
    let currents = [password];
    for(let i = 0; i < rounds; i++){
        currents.push(sha256(currents[i]));
    }

    return currents;
}

function comparePwd(password, hash){
    return hashPwd(password) === hash;
}

export { hashPwd, comparePwd, monitoredHashPwd };

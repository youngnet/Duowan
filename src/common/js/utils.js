const utils={
    filterContent(data){
        let reg=/\[[^[\]]+]/g;
        let str=data.replace(reg,"");
        return str;
    }
};
export default utils;
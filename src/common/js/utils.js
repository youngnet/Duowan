const utils={
    filterContent(data){
        let reg=/\[[^[\]]+]/g;
        let str=data.replace(reg,"");
        return str;
    },
    queryTime(date){
        let reg = /\d+-(\d+)-(\d+)T(\d+):(\d+):\d+/g;
        let s = date.replace(reg, function (...arg) {
            return `${arg[1]}-${arg[2]} ${arg[3]}:${arg[4]}`
        });
        return s;
    }

};
export default utils;
const PublicPath= process.env.NODE_ENV === 'production' ? 
    config.build.assetsPublicPath : config.dev.assetsPublicPath;


async function i18nInstall (lang = ["zh"]){
    const i18n = new VueI18n({
        locale: lang, // set locale
        messages: messagesData, // set locale messages
    });
    return i18n;
}

function GetLangJSON(url){
    return new Promise( resolve => $.get(url, data => resolve(resolve)) );
}

// 获取项目中的国际化数据
function getMessage(path, file = null, type = null){
    if(file && type)
        return GetLangJSON( `${PublicPath}static/i18n/${path}/${file}/${type}.json`);
}

async function langMessages(langTypes = ["zh"]){

    // 文本类型
    const i18List = [
        "error", // 错误码
        "label", // 文本信息
        "dictionary" // 字典信息
        ];
    let langAll = {};

    // 字典对应的目录
    i18List.map( path => {
        // 次级目录
        ["common", ...langConfig[item]].map( file => {
            let lang = {};
            // 语言类型
            // langTypes.map( type => { lang = await getMessage(path, file, type); });
            langAll[file] = Object.assign({}, lang, langAll[file]);
        })
    });

    return langAll;
}

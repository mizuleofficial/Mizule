const RNFS = require('react-native-fs');

export const cacheContent = (URL, token) => {
    let filename = URL.substring(URL.lastIndexOf("/") + 1, URL.length);
    let path_name = RNFS.DocumentDirectoryPath + "/" + filename;
    RNFS.exists(path_name).then(exists => {
        if (exists) {
            console.log("Content already cached.")
        } else {
            RNFS.downloadFile({
                fromUrl: URL,
                toFile: path_name.replace(/%20/g, "_"),
                background: true
                // , headers: { 'Authorization': `Bearer ${token}` }
            })
                .promise.then(res => {
                    console.log("File Downloaded", res);
                })
                .catch(err => {
                    console.log("err downloadFile", err);
                });
        }
    });
}

export const getCachedContent = (URL) => {
    const fileName = URL.substring(URL.lastIndexOf("/") + 1, URL.length);
    return new Promise((resolve, reject) => {
        RNFS.readDir(RNFS.DocumentDirectoryPath)
            .then(result => {
                result.forEach(element => {
                    if (element.name == fileName.replace(/%20/g, "_")) {
                        resolve(element.path);
                    }
                });
            })
            .catch(err => {
                reject(URL);
            });
    });
}
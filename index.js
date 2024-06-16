import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { createRequire } from 'module';

export default (meta) => {
    const { url } = meta;
    const fileName = fileURLToPath(url);
    const dirName = dirname(fileName);
    const urlJoin = (url, ...str) => (
        join(dirname(fileURLToPath(url)), ...str)
    );

    return {
        filename: fileName,
        dirname: dirName,
        join: urlJoin,
        require: createRequire(url),
    };
};

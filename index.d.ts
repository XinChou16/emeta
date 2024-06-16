declare const emeta: (meta: any) => {
    filename: string;
    dirname: string;
    join: (url: string, ...str: string[]) => string;
    require: any;
};

export default emeta;

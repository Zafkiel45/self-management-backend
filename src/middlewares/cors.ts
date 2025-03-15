export function setBasicCorsConfiguration(req: any, res: any, next: any) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Headers', 'content-type');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Credentials', 'true');

    if(req.method === "OPTION") {
        res.sendStatus(204);
    };

    next();
};
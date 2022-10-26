export function checkSchema(schema){
    return (req, res, next) => {
        const body = req.body;

        const check = schema.validate(body);

        if(check.error) return res.status(422).send(check.error.message);

        next();
    }
}
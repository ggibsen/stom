/**
 * Returns randomized number to any HTTP request, optionally using a "playerContext" field in the body
 * to help calculate the randomized number.
 *
 * @param {!Object} req Cloud Function request context.
 * @param {!Object} res Cloud Function response context.
 */
exports.random = (req, res) => {
    // Example input: {"playerContext": 3}
    if (req.body.playerContext !== undefined) {
        //TODO use playerContext
        console.log(`got playerContext: ${req.body.playerContext}`);
        // res.status(400).send('No playerContext defined!');
    }
    else {
        // player context is optional, so just ignore
        var randomNum = 10 * Math.random();
        console.log(`generated: ${randomNum}`);
        res.status(200).send('Random Number: ' + randomNum);
    }
};

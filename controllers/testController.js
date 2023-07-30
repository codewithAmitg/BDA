const testController = (req,res) =>{
    res.status(200).send({
        message: "welcome router test",
        success: true,
    })
};

module.exports = { testController }
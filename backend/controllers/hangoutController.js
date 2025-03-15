const createHangout = async (req, res) => { 
    try {
        const text = "hello"
        res.status(201).json(text);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = { createHangout };
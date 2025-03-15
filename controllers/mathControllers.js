const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Addition API
const addNumbers = async (req, res, next) => {
    try {
        const num1 = Number(req.body.num1);
        const num2 = Number(req.body.num2);
        if (isNaN(num1) || isNaN(num2)) {
            return res.status(400).json({ error: "Invalid numbers" });
        }
        const sum = num1 + num2;

        await prisma.calculations.create({
            data: { type: "addition", result: sum.toString() }
        });

        res.json({ sum });
    } catch (error) {
        next(error);
    }
};

// Factorial API
const calculateFactorial = async (req, res, next) => {
    try {
        const num = parseInt(req.params.number);
        if (num < 0 || isNaN(num)) {
            return res.status(400).json({ error: "Invalid number" });
        }

        const factorial = (n) => (n === 0 ? 1 : n * factorial(n - 1));
        const result = factorial(num);

        await prisma.calculations.create({
            data: { type: "factorial", result: result.toString() }
        });

        res.json({ result });
    } catch (error) {
        next(error);
    }
};

// Fibonacci API
const generateFibonacci = async (req, res, next) => {
    try {
        const count = parseInt(req.params.count);
        if (count <= 0 || isNaN(count)) {
            return res.status(400).json({ error: "Invalid count" });
        }

        const fibonacci = (n) => {
            const series = [0, 1];
            for (let i = 2; i < n; i++) {
                series.push(series[i - 1] + series[i - 2]);
            }
            return series;
        };

        const result = fibonacci(count);

        await prisma.calculations.create({
            data: { type: "fibonacci", result: result.join(",") }
        });

        res.json({ result });
    } catch (error) {
        next(error);
    }
};

module.exports = { addNumbers, calculateFactorial, generateFibonacci };

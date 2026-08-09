import express from "express";

const app = express();

const PORT = process.env.PORT ?? 3000;

app.get('/', (req, res) => {
    res.status(200).json({
        message: "Hello i am vikash developed my first CI/CD pipe line via GithubActions"
    })
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

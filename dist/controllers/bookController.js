let books = [];
export const getBooks = (req, res) => {
    try {
        res.status(200).json({
            message: "Books retrieved successfully",
            books: books,
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Internal Server Error",
            error: error,
        });
    }
};
export const addBook = (req, res) => {
    try {
        const { title, author, price } = req.body;
        if (!title || !author || price === undefined) {
            return res.status(400).json({
                message: "Please provide title, author and price",
            });
        }
        const newBook = {
            id: books.length + 1,
            title,
            author,
            price,
        };
        books.push(newBook);
        res.status(201).json({
            message: "Book added successfully",
            book: newBook,
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Internal Server Error",
            error: error,
        });
    }
};
export const getBookById = (req, res) => {
    try {
        const id = Number(req.params.id);
        const book = books.find((book) => book.id === id);
        if (!book) {
            return res.status(404).json({
                message: "Book not found",
            });
        }
        res.status(200).json({
            message: "Book retrieved successfully",
            book: book,
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Internal Server Error",
            error: error,
        });
    }
};
export const updateBook = (req, res) => {
    try {
        const id = Number(req.params.id);
        const bookIndex = books.findIndex((book) => book.id === id);
        if (bookIndex === -1) {
            return res.status(404).json({
                message: "Book not found",
            });
        }
        books[bookIndex] = {
            ...books[bookIndex],
            ...req.body,
            id: id,
        };
        res.status(200).json({
            message: "Book updated successfully",
            book: books[bookIndex],
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Internal Server Error",
            error: error,
        });
    }
};
export const deleteBook = (req, res) => {
    try {
        const id = Number(req.params.id);
        const bookIndex = books.findIndex((book) => book.id === id);
        if (bookIndex === -1) {
            return res.status(404).json({
                message: "Book not found",
            });
        }
        const deletedBook = books.splice(bookIndex, 1);
        res.status(200).json({
            message: "Book deleted successfully",
            book: deletedBook[0],
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Internal Server Error",
            error: error,
        });
    }
};

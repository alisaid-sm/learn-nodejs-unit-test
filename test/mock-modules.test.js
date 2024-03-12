import { getAllProducts, getProductById } from "../src/database";
import { ProductService } from "../src/product-service";

jest.mock("../src/database.js");

// Actually the code is below
// jest.mock("../src/database.js", () => {
//     return {
//         _esModule: true,
//         getProductById: jest.fn(),
//         getAllProducts: jest.fn()
//     };
// });

test("mock modules getProductById", () => {
    getProductById.mockImplementation((id) => {
        return {
            id: id,
            name: "Product Mock"
        }
    });

    const product = ProductService.findById(1);

    expect(product).toEqual({
        id: 1,
        name: "Product Mock"
    })
});

test("mock modules getAllProducts", () => {
    const products = [
        {
            id: 1,
            name: "Product Mock"
        },
        {
            id: 2,
            name: "Product Mock"
        },
    ];

    getAllProducts.mockImplementation((id) => {
        return products;
    });

    expect(ProductService.findAll()).toEqual(products);
});

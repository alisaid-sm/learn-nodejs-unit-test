import { getAllProducts } from "../src/database";
import { ProductService } from "../src/product-service";

jest.mock("../src/database.js", () => {
    const originalModule = jest.requireActual("../src/database.js");

    return {
        _esModule: true,
        ...originalModule,
        getAllProducts: jest.fn()
    };
});

test.failing("mock modules getProductById", () => {
    ProductService.findById(1);
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

import { UserRepository } from "../src/user-repository";
import { UserService } from "../src/user-service";

const repository = new UserRepository();
const service = new UserService(repository);

test("test mock partial class findById", () => {
    const user = {id: 1, name: "Eko"};
    const findByIdMock = jest.spyOn(repository, 'findById');
    findByIdMock.mockReturnValueOnce(user);

    expect(service.findById(1)).toEqual(user);
    expect(findByIdMock).toHaveBeenCalled();
    expect(repository.findById).toHaveBeenCalled();
});

test.failing("test mock partial class findAll", () => {
    service.findAll()
});

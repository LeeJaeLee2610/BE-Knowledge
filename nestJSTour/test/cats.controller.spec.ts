import { Test } from '@nestjs/testing';
import { CatsService } from 'src/cat/services/cats.service';
import { CatsController } from './../src/cat/controllers/cats.controller';
describe('CatsController', () => {
    let catsController: CatsController;
    let catsService: CatsService;

    beforeEach(async () => {
        const moduleRef = await Test.createTestingModule({
            controllers: [CatsController],
            providers: [CatsController]
        }).compile();
        catsService = moduleRef.get<CatsService>(CatsService);
        catsController = moduleRef.get<CatsController>(CatsController);
    })

    describe('findAll', () => {
        it("should return an array of cats", async () => {
            const result = ['test'];
            jest.spyOn(catsService, 'findAll').mockImplementation(() => result);

            expect(await catsController.findAll()).toBe(result);
        });
    });
});
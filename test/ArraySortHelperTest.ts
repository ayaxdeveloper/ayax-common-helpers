import { expect } from "chai";
import "mocha";
import { ArraySortHelper } from "../src/helpers/ArraySortHelper";

const ARRAYTOSORT = [
    {id: 19, title: "Из рук в руки (сайт) krasnodar.irr.ru ", order: 10},
    {id: 50, title: "yandex.ru Яндекс", order: 1},
    {id: 8, title: "avito.ru Авито", order: 1},
    {id: 9, title: "ayax.ru аякс", order: 3},
    {id: 55, title: "Интернет", order: 2},
    {id: 7, title: "Другое", order: 2},
    {id: 1, title: "Первле", order: 0}
];

describe("ArraySortHelper", () => {
    it("Sort by order and title asc", () => {
        const arrayClone = ARRAYTOSORT.map(x => ({...x}));
        arrayClone.sort(ArraySortHelper.sortBy(["order","title"]).asc);
        expect(arrayClone[0].id).to.equal(1);
        expect(arrayClone[1].id).to.equal(8);
    });

    it("Sort by non existing property", () => {
        const arrayClone = ARRAYTOSORT.map(x => ({...x}));
        arrayClone.sort(ArraySortHelper.sortBy(["asd"]).asc);
        expect(arrayClone[0].id).to.equal(19);
        expect(arrayClone[1].id).to.equal(50);
    });
});
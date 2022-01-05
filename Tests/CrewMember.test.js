const CrewMember = require('../CrewMember')

describe('CrewMember', function () {  //CrewMember test suite

    // check crew member has name
    test('Crew member has a name', () => {
        const a = new CrewMember;
        a.name = "Crew Mac";
        expect(a.name).toBe("Crew Mac");
    });

    // check crew member does not have a name
    test('Crew member does not have a name', () =>{
        const b = new CrewMember;
        b.name="Homer Simpson";
        expect(b.name).toBe("Homer Simpson");
    })

})
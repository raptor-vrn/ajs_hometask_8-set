import Bowerman from '../Bowerman';
import Team from '../Team';

test('Добавление персонажа', () => {
    const bowerman = new Bowerman('Igor');
    const team = new Team();
    team.add(bowerman);

    const received = team.toArray();
    const expected = [{
        name: 'Igor',
        type: 'Bowerman',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
    }];

    expect(received).toEqual(expected);
});

test('Добавление группы персонажей', () => {
    const firstBowerman = new Bowerman('Igor');
    const secondBowerman = new Bowerman('Max');
    const team = new Team();
    team.addAll(firstBowerman, secondBowerman);

    const received = team.toArray();
    const expected = [{
        name: 'Igor',
        type: 'Bowerman',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
    },
        {
            name: 'Max',
            type: 'Bowerman',
            health: 100,
            level: 1,
            attack: 25,
            defence: 25,
        }];

    expect(received).toEqual(expected);
});

test('Повторный выбор персонажа', () => {
    const bowerman = new Bowerman('Serg');
    const team = new Team();
    team.add(bowerman);

    expect(() => {
        team.add(bowerman);
    }).toThrow();
});
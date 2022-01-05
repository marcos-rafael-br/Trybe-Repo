const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonAtk = (dragon) => {
  const minDmg = 15;
  const dragonDmg = Math.floor(
    Math.random() * (dragon.strength - minDmg + 1) + minDmg
  );
  return dragonDmg;
};

const warriorAtk = (warrior) => {
  const minDmg = warrior.strength;
  const maxDmg = minDmg * warrior.weaponDmg;
  const warriorDamage = Math.floor(
    Math.random() * (maxDmg - minDmg + 1) + minDmg
  );
  return warriorDamage;
};

const mageAtk = (mage) => {
  const maxDmg = mage.intelligence * 2;
  const minDmg = mage.intelligence;
  const mageMana = mage.mana;
  const turnStats = {
    manaSpent: 0,
    damageDealt: 'Você não possui mana...',
  };

  if (mageMana > 15) {
    const mageDamage = Math.floor(
      Math.random() * (maxDmg - minDmg + 1) + minDmg
    );
    turnStats.manaSpent = 15;
    turnStats.damageDealt = mageDamage;
    return turnStats;
  }
  return turnStats;
};

const gameActions = {
  warriorTurn: (warriorAtk) => {
    const warriorDamage = warriorAtk(warrior);
    warrior.damage = warriorDamage;
    dragon.healthPoints -= warriorDamage;
  },
  mageTurn: (mageAtk) => {
    const mageTurnStats = mageAtk(mage);
    const mageDamage = mageTurnStats.damageDealt;
    mage.damage = mageDamage;
    mage.mana -= mageTurnStats.manaSpent;
    dragon.healthPoints -= mageDamage;
  },
  dragonTurn: (dragonAtk) => {
    const dragonDamage = dragonAtk(dragon);
    dragon.damage = dragonDamage
    mage.healthPoints -= dragonDamage;
    warrior.healthPoints -= dragonDamage;
  },turnResults: () => battleMembers
};
gameActions.warriorTurn(warriorAtk);
gameActions.mageTurn(mageAtk);
gameActions.dragonTurn(dragonAtk);

console.log(gameActions.turnResults());

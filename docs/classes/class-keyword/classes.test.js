import Test from 'ava';
import Robots, { FACTIONS, Robot } from './';

Test('Optimus Prime', t => {
  const { optimusPrime } = Robots;
  t.is(optimusPrime.name, 'Optimus Prime');
  t.is(optimusPrime.faction, FACTIONS.Autobots);
  t.is(optimusPrime.greet(), `Hi, I'm Optimus Prime`);
});

Test('Ironhide', t => {
  const { ironhide } = Robots;
  t.is(ironhide.name, 'Ironhide');
  t.is(ironhide.faction, FACTIONS.Autobots);
  t.is(ironhide.greet(), `Hi, I'm Ironhide`);
});

Test('Megatron', t => {
  const { megatron } = Robots;
  t.is(megatron.name, 'Megatron');
  t.is(megatron.faction, FACTIONS.Decepticons);
  t.is(megatron.greet(), `Hi, I'm Megatron`);
});

Test('Starscream', t => {
  const { starscream } = Robots;
  t.is(starscream.name, 'Starscream');
  t.is(starscream.faction, FACTIONS.Decepticons);
  t.is(starscream.greet(), `Hi, I'm Starscream`);
});

Test('Can create bumblebee from Robot', t => {
  const name = 'BumbleBee';
  const faction = FACTIONS.Autobots;
  const POWER = 1000;
  
  const bumblebee = new Robot(name, faction);
  
  
  t.is(bumblebee.name, name);
  t.is(bumblebee.faction, FACTIONS.Autobots);
  t.is(bumblebee.greet(), `Hi, I'm ${name}`);
  t.is(bumblebee.power, POWER);
});



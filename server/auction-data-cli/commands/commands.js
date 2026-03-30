#!/usr/bin/env node

const { Command } = require("commander");
const {
  seedItems,
  seedListings,
  addItem,
  listItems,
  deleteAllItems,
  deleteAllListings,
} = require("../index.js");

const inquirer = require("inquirer").default;
const { questionsForItems } = require("./prompts.js");

const program = new Command();

program
  .name("auction-data-cli")
  .description("CLI tool for managing trademe items data")
  .version("1.0.0");

program
  .command("seed")
  .description("seeding all items into MongoDB")
  .action(() => seedItems());

program
  .command("seedListings")
  .description("seeding all listings into MongoDB")
  .action(() => seedListings());

// adding items
program
  .command("addItem")
  .description("Add a new auction listing")
  .action(() => {
    inquirer.prompt(questionsForItems).then((answers) => addItem(answers));
  });

program
  .command("listItems")
  .description("List of all added auctions")
  .action(() => listItems());

// delete all items from mongoDB
program
  .command("deleteAllItems")
  .description("Deleting all auctions from MongoDB")
  .action(() => deleteAllItems());

  program
  .command("deleteAllListings")
  .description("Deleting all listings from MongoDB")
  .action(() => deleteAllListings());
  
program.parse(process.argv);
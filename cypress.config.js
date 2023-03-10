const { defineConfig } = require("cypress");
const allureWriter = require("@shelex/cypress-allure-plugin/writer")
const pg = require("pg");

module.exports = defineConfig({
    projectId: "pw2j6b",
    e2e: {
        setupNodeEvents(on, config) {
            on("task", {
                TASKONDB({ dbConfig, sql }) {
                    const client = new pg.Pool(dbConfig);
                    return client.query(sql);
                },
            });
            // implement node event listeners here
            allureWriter(on, config);
            require("cypress-localstorage-commands/plugin")(on, config);
            return config;
        },
        DB: {
            user: "postgres",
            host: "localhost",
            database: "trucksdb",
            password: "RqLm-26",
            port: "5432",
        },
    },
});
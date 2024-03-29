use std::string::String;

use reqwest::blocking::Client;

use crate::helpers::strip::Parameters;

fn search(query: &str) -> Result<(), Box<dyn std::error::Error>> {
    let client = Client::new();
    let url = format!("https://top.gg/api/client/entities/search?entityType=bot&platform=discord&query={}", query);
    let response = client.get(&url).send()?;

    if response.status().is_success() {
        let data = response.json::<serde_json::Value>()?;


        if let Some(bots) = data.get("bots").and_then(|bots| bots.as_array()) {
            for bot in bots {
                if let Some(bot_name) = bot.get("name").and_then(|name| name.as_str()) {
                    println!("Bot name: {}", bot_name);
                }
                println!("{}", bot)
            }
        }
    } else {
        println!("Failed to search for bots. Status code: {}", response.status());
    }

    Ok(())
}

pub fn execute(parameters: Parameters) -> String {
    if !parameters.args.is_empty() {
        let args = parameters.args.join(" ");
        println!("Args: {}", args);
        let result = search(&args);
        match result {
            Ok(_) => "Search complete.".to_string(),
            Err(_) => "Failed to search.".to_string(),
        }
        // convert the search results to a parsable format then return them as a formatted string
    } else {
        "No search query provided.".parse().unwrap()
    }
}

use reqwest::blocking::Client;

use crate::helpers::strip::Parameters;

use crate::helpers::bot_format::Bot;

fn search(query: &str) -> Result<Vec<Bot>, Box<dyn std::error::Error>> {
    let client = Client::new();
    let url = format!("https://top.gg/api/client/entities/search?entityType=bot&platform=discord&newSortingOrder=TOP&query={}", query);
    let response = client.get(&url).send()?;
    if response.status().as_u16() == 200 {
        let data = response.json::<serde_json::Value>()?;

        if let Some(bots) = data.get("results").and_then(|bots| bots.as_array()) {
            let mut bot_results = Vec::new();
            for bot in bots {
                if let (Some(bot_name), Some(bot_desc), Some(bot_id)) = (bot.get("name").and_then(|name| name.as_str()), bot.get("description").and_then(|desc| desc.as_str()), bot.get("id").and_then(|id| id.as_str())) {
                    bot_results.push(Bot {
                        name: bot_name.to_string(),
                        id: bot_id.to_string(),
                        description: bot_desc.to_string(),
                    });
                }
            }
            return Ok(bot_results);
        }
    } else {
        println!("Failed to search for bots. Status code: {}", response.status());
    }

    Ok(Vec::new())
}

pub fn execute(parameters: Parameters) -> String {
    if !parameters.args.is_empty() {
        let args = parameters.args.join(" ");
        match search(&args) {
            Ok(bot_results) => {
                if bot_results.is_empty() {
                    "No bots found.".to_string()
                } else {
                    let mut result_string = String::new();
                    for bot in bot_results {
                        result_string.push_str(&format!("{}\n\n", bot));
                    }
                    let mut full_result_string = String::new();
                    full_result_string.push('\n'); // Append newline character
                    full_result_string.push_str(&result_string); // Append the result_string
                    full_result_string
                }
            }
            Err(_) => "Failed to search.".to_string(),
        }
    } else {
        "No search query provided.".to_string()
    }
}

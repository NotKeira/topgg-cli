// disable dead code warnings
#![allow(dead_code)]
use std::io;
use std::io::Write;

use command_handler::CommandHandler;

use crate::command_handler::Error;
use crate::helpers::strip;

mod command_handler;
mod commands;
mod helpers;

fn main() {
    println!("Top.GG. Type 'help' to begin");
    println!("Type 'exit' to stop.");

    loop {
        {
            print!("RUN: ");
            io::stdout().flush().expect("Failed to flush");
            let mut input: String = String::new();
            io::stdin().read_line(&mut input).expect("Failed to read line");
            input.trim().to_string();
            let vargs: Vec<&str> = input.split_whitespace().skip(1).collect();
            let parameters = strip::split_flags(vargs);

            let command: String = input.split_whitespace().next().unwrap().to_string();
            let result: Result<String, Error> = CommandHandler::handle(command, parameters);
            let response: String;
            match result {
                Ok(value) if &value == "break" => {
                    println!("Top.GG: Goodbye!");
                    break;
                }
                Ok(value) => response = value,
                Err(_) => response = "I don't understand that command.".to_string(),
            }

            println!("Top.GG: {}", response);
        }
    }
}
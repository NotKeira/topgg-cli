use reqwest::blocking::Client;
use scraper::{Html, Selector};

use crate::helpers::strip::Parameters;

fn search(query: &str) -> Result<String, Box<dyn std::error::Error>> {
    let client = Client::new();
    let url = format!("https://top.gg/bot/{}", query);
    let mut headers = reqwest::header::HeaderMap::new();
    headers.insert("Host", "top.gg".parse().unwrap());
    headers.insert("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:124.0) Gecko/20100101 Firefox/124.0".parse().unwrap());
    headers.insert("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8".parse().unwrap());
    headers.insert("Accept-Language", "en-GB,en;q=0.5".parse().unwrap());
    headers.insert("Accept-Encoding", "gzip, deflate, br".parse().unwrap());
    headers.insert("Connection", "keep-alive".parse().unwrap());
    headers.insert("Cookie", "mode=dark; connect.sid=s%3AvdVy-9NutLSSAbxYBsyWJoXNi5D1Vlvw.12W%2BZIJWHF2zDE9GWZc%2FKKL1NAsifF95qRC8jo3hb08; amp_4180d2=K7azt6P18VjQtJPQDxk5ii...1hq5hrn53.1hq5m7pjc.v.1n.2m; amp_4180d2_top.gg=K7azt6P18VjQtJPQDxk5ii.MTgxNzg5NTc3MTYzNzcxOTA0..1hq5hrnak.1hq5m7prs.2n.1p.4g; cf_clearance=QtDe2wQMszRDOivYAkmmiqIOdcjjupGtH0HsvfgYgjg-1711735503-1.0.1.1-zDtfHc_On92KBMAdHkVrCPdDzp48fXDwNe_wiIA1amw_G1VycAwnivgiNtoLn0Jw_QuohjMsJWSpRhDIY.lWVw; dnsDisplayed=undefined; ccpaApplies=false; signedLspa=undefined; consentUUID=dffca672-8f60-42fb-93f3-2ce194bfbf63_29; theme=red; maintenanceBannerIsClosed=true; country=GB; device=desktop; __cf_bm=LogXzZvwbPp9tG3QU8Pvqh_MGK9wQyC3IanR.ToTTg8-1711735494-1.0.1.1-9LgWDRjUWmrOnG7bvlKRH5IhfPs5xgmK6.i.J9CNEBeiVIoIRzY2XSAQHSSQ850tn5Wi__uInZnO97KPWFyvvQ; DO-LB=\"ChExMC4xMzEuMTAxLjE2NTo4MBCF53g=\"".parse().unwrap());
    headers.insert("Upgrade-Insecure-Requests", "1".parse().unwrap());
    headers.insert("Sec-Fetch-Dest", "document".parse().unwrap());
    headers.insert("Sec-Fetch-Mode", "navigate".parse().unwrap());
    headers.insert("Sec-Fetch-Site", "cross-site".parse().unwrap());
    headers.insert("TE", "trailers".parse().unwrap());
    let response = client.get(&url).send()?;
    // println!("{:?}", response);

    if response.status().is_success() {
        let body = response.text()?;
        let document = Html::parse_document(&body);
        if document.select(&Selector::parse("404").unwrap()).next().is_some() {
            return Ok(String::from(""));
        } else {
            return Ok(String::from("Bot exists: ") + &url);
        }
    } else {
        println!("Failed to search for bots.\nURL:{}\n Status code: {}", &url, response.status());
    }

    Err("Failed to search.".into())
}

pub fn execute(parameters: Parameters) -> String {
    if !parameters.args.is_empty() {
        let args = parameters.args.join(" ");
        match search(&args) {
            Ok(result) => {
                if result.is_empty() {
                    "Bot doesn't exist.".to_string()
                } else {
                    let mut full_result_string = String::new();
                    full_result_string.push('\n'); // Append newline character
                    full_result_string.push_str(&result); // Append the result_string
                    full_result_string
                }
            }
            Err(_) => "Failed to search.".to_string(),
        }
    } else {
        "No search query provided.".to_string()
    }
}

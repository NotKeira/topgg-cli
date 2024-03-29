use std::fmt;

#[derive(Debug)]
pub(crate) struct Bot {
    pub(crate) name: String,
    pub(crate) description: String,
    pub(crate) id: String,
}


impl fmt::Display for Bot {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        write!(f, "Name: {}\nDescription: {}\nID: {}\nLink: https://top.gg/bot/{}", self.name, self.description, self.id, self.id)
    }
}
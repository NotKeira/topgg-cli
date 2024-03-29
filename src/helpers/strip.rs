#[derive(Debug)]
pub struct Parameters<'a> {
    pub(crate) flags: Vec<&'a str>,
    pub(crate) args: Vec<&'a str>,
}

pub fn split_flags(args: Vec<&str>) -> Parameters<'_> {
    let mut flags = Vec::new();
    let mut rest = Vec::new();
    for arg in args {
        if arg.starts_with("-") {
            flags.push(&arg[1..]);
        } else {
            rest.push(arg);
        }
    }
    Parameters { flags, args: rest }
}
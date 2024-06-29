from passlib.context import CryptContext

password_context = CryptContext(
    schemes=["bcrypt"],
    deprecated="auto"
)

def generate_password_hash(password: str):
    hash = password_context.hash(password)
    
    return hash

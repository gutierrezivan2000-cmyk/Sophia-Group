import zipfile
import os
import shutil
import subprocess

# Discover project root dynamically
cwd = os.getcwd()
print(f"Current working directory: {cwd}")

# Try multiple possible locations
possible_roots = [cwd, '/vercel/share/v0-project', os.path.dirname(os.path.abspath('SohpiaGroup.zip'))]
project_root = None
zip_path = None

for root in possible_roots:
    candidate = os.path.join(root, 'SohpiaGroup.zip')
    print(f"Checking: {candidate} -> exists: {os.path.exists(candidate)}")
    if os.path.exists(candidate):
        project_root = root
        zip_path = candidate
        break

# Also check if the zip is in the current directory directly
if zip_path is None and os.path.exists('SohpiaGroup.zip'):
    project_root = cwd
    zip_path = os.path.abspath('SohpiaGroup.zip')

if project_root is None:
    # Walk from cwd upward
    check = cwd
    for _ in range(5):
        candidate = os.path.join(check, 'SohpiaGroup.zip')
        if os.path.exists(candidate):
            project_root = check
            zip_path = candidate
            break
        check = os.path.dirname(check)

if project_root is None:
    print("ERROR: Could not find SohpiaGroup.zip anywhere!")
    # List everything in cwd
    print(f"\nContents of cwd ({cwd}):")
    for item in os.listdir(cwd):
        print(f"  {item}")
    exit(1)

extract_dir = os.path.join(project_root, '_extracted')

print(f"\nZIP path: {zip_path}")
print(f"Extract dir: {extract_dir}")
print(f"Project root: {project_root}")

# Debug: list all files in project root
print("\nFiles in project root:")
for item in os.listdir(project_root):
    full = os.path.join(project_root, item)
    if os.path.isfile(full):
        size = os.path.getsize(full)
        print(f"  FILE: {item} ({size} bytes)")
        # Check if it's a Git LFS pointer
        if size < 200:
            with open(full, 'r', errors='ignore') as f:
                content = f.read()
                if 'git-lfs' in content:
                    print(f"    -> This is a Git LFS pointer!")
                    print(f"    Content: {content[:200]}")
    else:
        print(f"  DIR: {item}")

if not os.path.exists(zip_path):
    print("ERROR: ZIP file not found!")
    # Try to find it elsewhere
    for root, dirs, files in os.walk(project_root):
        for f in files:
            if f.endswith('.zip'):
                print(f"  Found ZIP at: {os.path.join(root, f)}")
    exit(1)

print(f"ZIP file size: {os.path.getsize(zip_path)} bytes")

# Extract
with zipfile.ZipFile(zip_path, 'r') as zip_ref:
    file_list = zip_ref.namelist()
    print(f"\nFound {len(file_list)} files in ZIP:")
    for f in file_list[:50]:
        print(f"  {f}")
    if len(file_list) > 50:
        print(f"  ... and {len(file_list) - 50} more files")
    
    zip_ref.extractall(extract_dir)
    print(f"\nExtracted to: {extract_dir}")

# List top-level contents of extracted dir
extracted_contents = os.listdir(extract_dir)
print(f"\nTop-level extracted contents: {extracted_contents}")

# Check if there's a single wrapper folder
if len(extracted_contents) == 1 and os.path.isdir(os.path.join(extract_dir, extracted_contents[0])):
    inner_dir = os.path.join(extract_dir, extracted_contents[0])
    print(f"\nSingle wrapper folder found: {extracted_contents[0]}")
    print(f"Inner contents: {os.listdir(inner_dir)}")
    source_dir = inner_dir
else:
    source_dir = extract_dir

print(f"\nSource directory for copy: {source_dir}")
print(f"Contents to move: {os.listdir(source_dir)}")

# Move files to project root
for item in os.listdir(source_dir):
    src = os.path.join(source_dir, item)
    dst = os.path.join(project_root, item)
    
    # Skip the zip, scripts folder, extracted folder, and node_modules
    if item in ['SohpiaGroup.zip', 'scripts', '_extracted', 'node_modules', '.git']:
        print(f"Skipping: {item}")
        continue
    
    if os.path.exists(dst):
        if os.path.isdir(dst):
            shutil.rmtree(dst)
        else:
            os.remove(dst)
        print(f"Replaced: {item}")
    else:
        print(f"Added: {item}")
    
    if os.path.isdir(src):
        shutil.copytree(src, dst)
    else:
        shutil.copy2(src, dst)

# Cleanup
shutil.rmtree(extract_dir)
print("\nCleanup done. Extraction complete!")

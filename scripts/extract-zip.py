import zipfile
import os
import shutil

zip_path = os.path.join(os.path.dirname(__file__), '..', 'SohpiaGroup.zip')
extract_dir = os.path.join(os.path.dirname(__file__), '..', '_extracted')
project_root = os.path.join(os.path.dirname(__file__), '..')

zip_path = os.path.abspath(zip_path)
extract_dir = os.path.abspath(extract_dir)
project_root = os.path.abspath(project_root)

print(f"ZIP path: {zip_path}")
print(f"Extract dir: {extract_dir}")
print(f"Project root: {project_root}")

if not os.path.exists(zip_path):
    print("ERROR: ZIP file not found!")
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

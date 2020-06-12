#!/usr/bin/python
#
# Utility script to copy the pictures to the correct directory in the correct format
#
# Usage:
#    ./copy-pictures.py -s /tmp/pictures/ -t site/static/static/pictures/
import os
import sys
import re
import argparse
from shutil import copyfile


def _parse_args(argv):
    parser = argparse.ArgumentParser(description='Copy pictures and normalize file names')
    parser.add_argument('-s', '--source', required=True,
                        help='Source directory')
    parser.add_argument('-t', '--target', required=True,
                        help='Source directory')

    args = parser.parse_args()
    source_dir = args.source
    target_dir = args.target
    return source_dir, target_dir


def main(argv):
    # p = re.compile('A\. Confinamiento(\d*)\.png')
    p = re.compile('A\. Confinamiento movil(\d*)\.png')
    source_dir, target_dir = _parse_args(argv)
    for file in os.listdir(source_dir):
        match = p.match(file)
        if match:
            count = int(match.group(1) or 1)
            source_path = os.path.join(source_dir, file)
            target_file = 'picture-%s.png' % count
            target_path = os.path.join(target_dir, target_file)
            print("Copying '%s' to '%s'" % (source_path, target_path))
            copyfile(source_path, target_path)


if __name__ == "__main__":
    main(sys.argv[1:])

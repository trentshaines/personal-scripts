import os
import schedule
import time
import subprocess
import sys

def create_daily_note():
    """Trigger Command-Option-D using AppleScript to create daily note"""
    applescript = '''
    tell application "System Events"
        keystroke "D" using {command down, option down}
    end tell
    '''
    subprocess.run(['osascript', '-e', applescript])
    print(f"Created daily note at {time.strftime('%Y-%m-%d %H:%M:%S')}")

def main():
    try:
        # Schedule for 12:01 AM
        schedule.every().day.at("00:01").do(create_daily_note)
        
        print("Daily note creator started. Will run Command-Option-D at 12:01 AM daily.")
        
        # Create note immediately if starting close to midnight
        current_time = time.localtime()
        if current_time.tm_hour == 23 and current_time.tm_min >= 55:
            create_daily_note()
        
        # Keep the script running
        while True:
            schedule.run_pending()
            time.sleep(60)
            
    except KeyboardInterrupt:
        print("\nShutting down daily note creator...")
        sys.exit(0)

if __name__ == "__main__":
    main()

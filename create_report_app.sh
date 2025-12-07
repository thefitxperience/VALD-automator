#!/bin/bash
osascript << 'APPLESCRIPT'
on run
    set gymChoice to button returned of (display dialog "Select Gym:" buttons {"Body Masters", "Body Motions", "All"} default button 3)
    
    try
        if gymChoice is "All" then
            -- Generate combined report
            set reportPath to do shell script "cd '/Users/andyayas/VALD Automator' && .venv/bin/python process_dynamo.py --report all 2>&1 | grep 'Summary report saved:' | sed 's/Summary report saved: //'"
            
            -- Open the report
            do shell script "open " & quoted form of reportPath
            
            -- Wait for user to close it, then delete
            display dialog "Report opened. Click OK when done viewing to delete it." buttons {"OK"} default button 1
            do shell script "rm " & quoted form of reportPath
        else
            -- Generate single report
            if gymChoice is "Body Masters" then
                set gym to "masters"
            else
                set gym to "motions"
            end if
            
            set reportPath to do shell script "cd '/Users/andyayas/VALD Automator' && .venv/bin/python process_dynamo.py --report " & gym & " 2>&1 | grep 'Summary report saved:' | sed 's/Summary report saved: //'"
            
            -- Open the report file
            do shell script "open " & quoted form of reportPath
            
            -- Wait for user to close it, then delete
            display dialog "Report opened. Click OK when done viewing to delete it." buttons {"OK"} default button 1
            do shell script "rm " & quoted form of reportPath
        end if
    on error errMsg
        display dialog "Error generating report: " & errMsg buttons {"OK"} default button 1 with icon stop
    end try
end run
APPLESCRIPT

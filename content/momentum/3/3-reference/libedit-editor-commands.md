---
lastUpdated: "03/26/2020"
title: "Editor Commands"
description: "Vi paste previous deletion to the right of the cursor Vi paste previous deletion to the left of the cursor Vi move to the previous space delimited word Vi move to the previous word Vi move to the next space delimited word Vi move to the next word Vi change..."
---

### <a name="libedit.func.vi-paste-next"></a> vi-paste-next

Vi paste previous deletion to the right of the cursor.

### <a name="libedit.func.vi-paste-prev"></a> vi-paste-prev

Vi paste previous deletion to the left of the cursor.

### <a name="libedit.func.vi-prev-space-word"></a> vi-prev-space-word

Vi move to the previous space delimited word.

### <a name="libedit.func.vi-prev-word"></a> vi-prev-word

Vi move to the previous word.

### <a name="libedit.func.vi-next-space-word"></a> vi-next-space-word

Vi move to the next space delimited word.

### <a name="libedit.func.vi-next-word"></a> vi-next-word

Vi move to the next word.

### <a name="libedit.func.vi-change-case"></a> vi-change-case

Vi change case of character under the cursor and advance one character.

### <a name="libedit.func.vi-change-meta"></a> vi-change-meta

Vi change prefix command.

### <a name="libedit.func.vi-insert-at-bol"></a> vi-insert-at-bol

Vi enter insert mode at the beginning of line.

### <a name="libedit.func.vi-replace-char"></a> vi-replace-char

Vi replace character under the cursor with the next character typed.

### <a name="libedit.func.vi-replace-mode"></a> vi-replace-mode

Vi enter replace mode.

### <a name="libedit.func.vi-substitute-char"></a> vi-substitute-char

Vi replace character under the cursor and enter insert mode.

### <a name="libedit.func.vi-substitute-line"></a> vi-substitute-line

Vi substitute entire line.

### <a name="libedit.func.vi-change-to-eol"></a> vi-change-to-eol

Vi change to end of line.

### <a name="libedit.func.vi-insert"></a> vi-insert

Vi enter insert mode.

### <a name="libedit.func.vi-add"></a> vi-add

Vi enter insert mode after the cursor.

### <a name="libedit.func.vi-add-at-eol"></a> vi-add-at-eol

Vi enter insert mode at end of line.

### <a name="libedit.func.vi-delete-meta"></a> vi-delete-meta

Vi delete prefix command.

### <a name="libedit.func.vi-end-word"></a> vi-end-word

Vi move to the end of the current space delimited word.

### <a name="libedit.func.vi-to-end-word"></a> vi-to-end-word

Vi move to the end of the current word.

### <a name="libedit.func.vi-undo"></a> vi-undo

Vi undo last change.

### <a name="libedit.func.vi-command-mode"></a> vi-command-mode

Vi enter command mode (use alternative key bindings).

### <a name="libedit.func.vi-zero"></a> vi-zero

Vi move to the beginning of line.

### <a name="libedit.func.vi-delete-prev-char"></a> vi-delete-prev-char

Vi move to previous character (backspace).

### <a name="libedit.func.vi-list-or-eof"></a> vi-list-or-eof

Vi list choices for completion or indicate end of file if empty line.

### <a name="libedit.func.vi-kill-line-prev"></a> vi-kill-line-prev

Vi cut from beginning of line to cursor.

### <a name="libedit.func.vi-search-prev"></a> vi-search-prev

Vi search history previous.

### <a name="libedit.func.vi-search-next"></a> vi-search-next

Vi search history next.

### <a name="libedit.func.vi-repeat-search-next"></a> vi-repeat-search-next

Vi repeat current search in the same search direction.

### <a name="libedit.func.vi-repeat-search-prev"></a> vi-repeat-search-prev

Vi repeat current search in the opposite search direction.

### <a name="libedit.func.vi-next-char"></a> vi-next-char

Vi move to the character specified next.

### <a name="libedit.func.vi-prev-char"></a> vi-prev-char

Vi move to the character specified previous.

### <a name="libedit.func.vi-to-next-char"></a> vi-to-next-char

Vi move up to the character specified next.

### <a name="libedit.func.vi-to-prev-char"></a> vi-to-prev-char

Vi move up to the character specified previous.

### <a name="libedit.func.vi-repeat-next-char"></a> vi-repeat-next-char

Vi repeat current character search in the same search direction.

### <a name="libedit.func.vi-repeat-prev-char"></a> vi-repeat-prev-char

Vi repeat current character search in the opposite search direction.

### <a name="libedit.func.em-delete-or-list"></a> em-delete-or-list

Delete character under cursor or list completions if at end of line.

### <a name="libedit.func.em-delete-next-word"></a> em-delete-next-word

Cut from cursor to end of current word.

### <a name="libedit.func.em-yank"></a> em-yank

Paste cut buffer at cursor position.

### <a name="libedit.func.em-kill-line"></a> em-kill-line

Cut the entire line and save in cut buffer.

### <a name="libedit.func.em-kill-region"></a> em-kill-region

Cut area between mark and cursor and save in cut buffer.

### <a name="libedit.func.em-copy-region"></a> em-copy-region

Copy area between mark and cursor to cut buffer.

### <a name="libedit.func.em-gosmacs-traspose"></a> em-gosmacs-traspose

Exchange the two characters before the cursor.

### <a name="libedit.func.em-next-word"></a> em-next-word

Move next to end of current word.

### <a name="libedit.func.em-upper-case"></a> em-upper-case

Uppercase the characters from cursor to end of current word.

### <a name="libedit.func.em-capitol-case"></a> em-capitol-case

Capitalize the characters from cursor to end of current word.

### <a name="libedit.func.em-lower-case"></a> em-lower-case

Lowercase the characters from cursor to end of current word.

### <a name="libedit.func.em-set-mark"></a> em-set-mark

Set the mark at cursor.

### <a name="libedit.func.em-exchange-mark"></a> em-exchange-mark

Exchange the cursor and mark.

### <a name="libedit.func.em-universal-argument"></a> em-universal-argument

Universal argument (argument times 4).

### <a name="libedit.func.em-meta-next"></a> em-meta-next

Add 8th bit to next character typed.

### <a name="libedit.func.em-toggle-overwrite"></a> em-toggle-overwrite

Switch from insert to overwrite mode or vice versa.

### <a name="libedit.func.em-copy-prev-word"></a> em-copy-prev-word

Copy current word to cursor.

### <a name="libedit.func.em-inc-search-next"></a> em-inc-search-next

Emacs incremental next search.

### <a name="libedit.func.em-inc-search-prev"></a> em-inc-search-prev

Emacs incremental reverse search.

### <a name="libedit.func.ed-end-of-file"></a> ed-end-of-file

Indicate end of file.

### <a name="libedit.func.ed-insert"></a> ed-insert

Add character to the line.

### <a name="libedit.func.ed-delete-prev-word"></a> ed-delete-prev-word

Delete from beginning of current word to cursor.

### <a name="libedit.func.ed-delete-next-char"></a> ed-delete-next-char

Delete character under cursor.

### <a name="libedit.func.ed-kill-line"></a> ed-kill-line

Cut to the end of line.

### <a name="libedit.func.ed-move-to-end"></a> ed-move-to-end

Move cursor to the end of line.

### <a name="libedit.func.ed-move-to-beg"></a> ed-move-to-beg

Move cursor to the beginning of line.

### <a name="libedit.func.ed-transpose-chars"></a> ed-transpose-chars

Exchange the character to the left of the cursor with the one under it.

### <a name="libedit.func.ed-next-char"></a> ed-next-char

Move to the right one character.

### <a name="libedit.func.ed-prev-word"></a> ed-prev-word

Move to the beginning of the current word.

### <a name="libedit.func.ed-prev-char"></a> ed-prev-char

Move to the left one character.

### <a name="libedit.func.ed-quoted-insert"></a> ed-quoted-insert

Add the next character typed verbatim.

### <a name="libedit.func.ed-digit"></a> ed-digit

Adds to argument or enters a digit.

### <a name="libedit.func.ed-argument-digit"></a> ed-argument-digit

Digit that starts argument.

### <a name="libedit.func.ed-unassigned"></a> ed-unassigned

Indicates unbound character.

### <a name="libedit.func.ed-tty-sigint"></a> ed-tty-sigint

Tty interrupt character.

### <a name="libedit.func.ed-tty-dsusp"></a> ed-tty-dsusp

Tty delayed suspend character.

### <a name="libedit.func.ed-tty-flush-output"></a> ed-tty-flush-output

Tty flush output characters.

### <a name="libedit.func.ed-tty-sigquit"></a> ed-tty-sigquit

Tty quit character.

### <a name="libedit.func.ed-tty-sigtstp"></a> ed-tty-sigtstp

Tty suspend character.

### <a name="libedit.func.ed-tty-stop-output"></a> ed-tty-stop-output

Tty disallow output characters.

### <a name="libedit.func.ed-tty-start-output"></a> ed-tty-start-output

Tty allow output characters.

### <a name="libedit.func.ed-newline"></a> ed-newline

Execute command.

### <a name="libedit.func.ed-delete-prev-char"></a> ed-delete-prev-char

Delete the character to the left of the cursor.

### <a name="libedit.func.ed-clear-screen"></a> ed-clear-screen

Clear screen leaving current line at the top.

### <a name="libedit.func.ed-redisplay"></a> ed-redisplay

Redisplay everything.

### <a name="libedit.func.ed-start-over"></a> ed-start-over

Erase current line and start from scratch.

### <a name="libedit.func.ed-sequence-lead-in"></a> ed-sequence-lead-in

First character in a bound sequence.

### <a name="libedit.func.ed-prev-history"></a> ed-prev-history

Move to the previous history line.

### <a name="libedit.func.ed-next-history"></a> ed-next-history

Move to the next history line.

### <a name="libedit.func.ed-search-prev-history"></a> ed-search-prev-history

Search previous in history for a line matching the current.

### <a name="libedit.func.ed-search-next-history"></a> ed-search-next-history

Search next in history for a line matching the current.

### <a name="libedit.func.ed-prev-line"></a> ed-prev-line

Move up one line.

### <a name="libedit.func.ed-next-line"></a> ed-next-line

Move down one line.